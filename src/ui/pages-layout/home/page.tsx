import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
export function HomePage({ children, title }: Props) {
  return (
    <main>
      <h2>{title}</h2>
      {children}
    </main>
  );
}
