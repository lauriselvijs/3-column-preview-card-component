export interface ILearnMoreClickedPropRender {
  learnMoreClicked: boolean;
  onLearnMoreBtnClick: () => void;
}

export interface ILearnMoreBtn {
  learnMoreBtnName?: string;
  learnMoreClicked?: boolean;
  onLearnMoreBtnClick?: () => void;
}

export interface ILearnMoreClickedWrapper {
  render: (
    learnMoreClicked: ILearnMoreClickedPropRender["learnMoreClicked"],
    setLearnMoreClicked: ILearnMoreClickedPropRender["onLearnMoreBtnClick"]
  ) => ReactNode;
}
