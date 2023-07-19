import Link from "next/link";

export const Links = () => {
  return (
    <ul>
      <li>
        <Link href="/hydration">hydration</Link>
      </li>
      <li>
        <Link href="/hydration-mismatch">hydration-mismatch</Link>
      </li>
      <li>
        <Link href="/suspense-update">suspense-update</Link>
      </li>
    </ul>
  );
};

export default Links;
