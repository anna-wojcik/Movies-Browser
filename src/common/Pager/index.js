import {
  PagerWrapper,
  PagerButton,
  PageInfo,
  PageInfoStyled,
  PagerText,
} from "./styled";

const Pager = () => (
  <>
    <PagerWrapper>
      <PagerButton>
        <div>≪</div>
        <PagerText>First</PagerText>
      </PagerButton>
      <PagerButton>
        <div>＜</div>
        <PagerText>Previous</PagerText>
      </PagerButton>
      <PageInfo>
        <PageInfoStyled>Page</PageInfoStyled>
        <PageInfoStyled $number>1</PageInfoStyled>
        <PageInfoStyled>of</PageInfoStyled>
        <PageInfoStyled $number>500</PageInfoStyled>
      </PageInfo>
      <PagerButton>
        <PagerText>Next</PagerText>
        <div>＞</div>
      </PagerButton>
      <PagerButton>
        <PagerText>Last</PagerText>
        <div>≫</div>
      </PagerButton>
    </PagerWrapper>
  </>
);

export default Pager;
