import React from 'react'
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { Container, Item, ItemImg, ItemLink } from './styles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { useEnableHeader } from '../../customHooks/useEnableHeader'

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Resources = () => {
  const baseUrl = 'https://res.cloudinary.com/d1zc3/image/upload'
  const landingUrl = 'v1589292483/All/Landing'
  const homeUrl = 'v1590540428/All/Home'
  const images = [
    `${baseUrl}/${landingUrl}/earth.jpg`,
    `${baseUrl}/${landingUrl}/spanish.jpg`,
    `${baseUrl}/${landingUrl}/english.jpg`,
    `${baseUrl}/${landingUrl}/german.jpg`,
    `${baseUrl}/${homeUrl}/learnbook.jpg`,
    `${baseUrl}/${homeUrl}/boy-studies.jpg`,
    `${baseUrl}/${homeUrl}/frau.jpg`,
    `${baseUrl}/v1591983275/All/Services/Free/blurredbooks.jpg`
  ]
  const imageLink = [
    'https://www.freepik.es/vector-gratis/mapa-mundo-gris_893780.htm#page=1&query=mapa%20del%20mundo&position=0#&position=0',
    'https://commons.wikimedia.org/w/index.php?curid=69323596',
    'https://commons.wikimedia.org/w/index.php?curid=3146597',
    'https://commons.wikimedia.org/w/index.php?curid=41430056',
    'https://mango.bz/uploads/mango/news/832/books.jpg',
    'https://i2.wp.com/stillteachingstilllearning.com/wp-content/uploads/2018/08/children-studying-670663_640.jpg?resize=300%2C199&ssl=1',
    'https://cdn.pixabay.com/photo/2016/11/29/02/56/blond-1866951_960_720.jpg',
    'https://www.freepik.com/free-photo/blurred-books-library-shelves_2488611.htm#page=1&query=abstract%20library&position=21#&position=21'
  ]
  /// ////////////////onMount hooks
  useEnableHeader()
  /// ///////////////PAGE
  return (
    <>
      <Container className='container'>
        {images.map((img, index) => (
          <Item key={index}>
            <ItemImg src={img} />
            <ItemLink href={imageLink[index]}>{imageLink[index]}</ItemLink>
          </Item>
        ))}
      </Container>
    </>
  )
}
