import { ReactNode } from "react";
import { Container } from "../components";

type Props = {
  title: string;
  children: ReactNode;
};
export function Page({ children, title }: Props) {
  return (
    <Container>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </Container>
  );
}
