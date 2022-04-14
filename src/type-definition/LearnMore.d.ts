export interface ILearnMoreClickedPropRender {
  learnMoreClicked: boolean;
  onLearnMoreBtnClick: () => void;
}

export interface ILearnMoreBtn {
  learnMoreBtnName?: string;
  learnMoreClicked?: boolean;
  onLearnMoreBtnClick?: () => void;
}
