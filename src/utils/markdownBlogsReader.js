import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "src/constants/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogsDir);

  return files.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: data.slug || filename.replace(".md", ""),
    };
  });
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}
