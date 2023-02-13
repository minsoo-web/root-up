import { GetServerSideProps } from "next";
import { use__ROOT_UP__hooks } from "./__ROOT_UP__.hooks";
import * as Styled from "./__ROOT_UP__.styles";
import type { __ROOT_UP__Props } from "./__ROOT_UP__.types";

export const __ROOT_UP__ = ({ dummy }: __ROOT_UP__Props) => {
  const app = use__ROOT_UP__hooks();

  return <Styled.Container>hi</Styled.Container>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const query = context.query;

  return {};
};
