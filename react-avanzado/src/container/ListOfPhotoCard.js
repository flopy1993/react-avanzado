import {withPhotos } from '../hoc/withPhotos'
import {ListOfPhotoCardsComponent} from '../components/ListOfPhotoCard'

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardsComponent)