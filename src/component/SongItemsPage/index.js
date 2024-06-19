import {RiDeleteBinLine} from 'react-icons/ri'
import {
  CustomList,
  CustomHeading,
  CustomImage,
  CustomeGenre,
  CustomThird,
  CustomListw,
  CustomButton,
} from './styledComponent'

const SongItemsPage = props => {
  const {songItems, onDelite} = props
  const {name, imageUrl, genre, duration, id} = songItems

  const onClickDelite = () => {
    onDelite(id)
  }

  return (
    <CustomList>
      <CustomImage src={imageUrl} alt="track" />
      <CustomListw>
        <CustomHeading>{name}</CustomHeading>
        <CustomeGenre>{genre}</CustomeGenre>
      </CustomListw>

      <CustomThird>
        <CustomHeading>{duration}</CustomHeading>
        <CustomButton
          type="button"
          onClick={onClickDelite}
          data-testid="delete"
        >
          {' '}
          <RiDeleteBinLine color="white" size="80px" />
        </CustomButton>
      </CustomThird>
    </CustomList>
  )
}
export default SongItemsPage
