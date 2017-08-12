import * as Styles from '../'
// import * as Colors from '../../../common/constants/Colors'

const NewAccountReviewScreenStyle = {
  screen: { ...Styles.ScreenStyle },
  row1: { ...Styles.ScreenRow, flex: 1 },
  row2: { ...Styles.ScreenRow, flex: 1 },
  row3: { ...Styles.ScreenRow, flex: 1 },
  row4: { ...Styles.ScreenRow, flex: 1 },
  row5: { ...Styles.ScreenRow, flex: 1 },
  row6: { ...Styles.ScreenRow, flex: 1, alignItems: 'center' },
  nextButton: {
    upStyle: Styles.PrimaryButtonUpStyle,
    upTextStyle: Styles.PrimaryButtonUpTextStyle,
    downTextStyle: Styles.PrimaryButtonUpTextStyle,
    downStyle: Styles.PrimaryButtonDownStyle
  }
}

export { NewAccountReviewScreenStyle }
