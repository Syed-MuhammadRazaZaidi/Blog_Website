import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Comments from "@/components/commentsSection";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;

  const filepath = `content/${(await params).slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <div className="container mx-auto items-center">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg mb-2 border-l-4  pl-4 italic">
            &quot;{data.description}&quot;
          </p>
          <p className="text-sm  italic">By {data.author}</p>
          <p className="text-sm">{data.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert mt-4"
          ></div>
          <OnThisPage htmlContent={htmlContent} />
        </div>
        <Comments />
      </div>
    </>
  );
}
