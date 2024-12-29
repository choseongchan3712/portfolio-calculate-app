import { Helmet } from "react-helmet-async";

interface PageTitleType {
  title: string;
}

const PageTitle = ({ title }: PageTitleType) => {
  return (
    <Helmet>
      <title>{title} | 올인원 계산기</title>
    </Helmet>
  );
};

export default PageTitle;
