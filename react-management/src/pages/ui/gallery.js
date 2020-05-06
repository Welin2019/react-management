import React from 'react'
import { Card, Col, Row, Modal } from 'antd'

export default class Gallery extends React.Component {

  state = {
    visible: false
  }

  openGallery = (imgSrc) => {
    this.setState({
      visible: true,
      currentImg: 'https://cdn.pixabay.com/photo/' + imgSrc
    })
  }
  // https://cdn.pixabay.com/photo/2020/05/01/23/39/squirrel-5119365__340.jpg
  render () {

    const imgs = [
      ['2020/05/01/23/39/squirrel-5119365__340.jpg', '2020/03/01/17/50/monalisa-4893660__340.jpg', '2020/04/23/16/45/landscape-5083247__340.jpg', '2020/05/02/08/52/face-5120386__340.jpg', '2020/05/01/09/13/cupcakes-5116009__340.jpg'],
      ['2020/04/27/09/21/cat-5098930__340.jpg', '2020/05/01/17/49/landscape-5118370__340.jpg', '2020/04/29/14/34/rabbit-5109091__340.jpg', '2020/05/03/18/45/alpaca-5126291__340.jpg','2020/04/30/16/53/hobby-5113658__340.jpg'],
      ['2020/04/28/19/21/nostalgia-5106057__340.jpg', '2020/04/19/18/00/owl-5064766__340.jpg', '2020/05/01/02/26/hamster-5115246__340.jpg', '2020/05/01/17/42/peacock-5118321__340.png', '2020/03/03/20/31/laguna-4899802__340.jpg'],
      ['2020/05/01/09/12/cupcakes-5116001__340.jpg', '2020/04/25/05/05/tunnel-5089488__340.jpg', '2020/04/28/12/54/iceland-5104369__340.jpg', '2020/05/02/16/58/squirrel-5122260__340.jpg', '2020/04/30/20/13/bench-5114491__340.jpg'],
      ['2020/04/30/13/56/geisha-5112920__340.jpg', '2020/04/24/21/52/frogs-5088767__340.jpg', '2020/04/26/23/14/cat-5097509__340.jpg', '2020/04/23/13/31/moon-5082537__340.jpg', '2020/04/16/16/52/fantasy-5051503__340.jpg']
    ]

    const imgList = imgs.map((list) => list.map((item, i) =>
      <Card
        style={{marginBottom: 20}}
        cover={<img src={'https://cdn.pixabay.com/photo/' + item} onClick = { () => this.openGallery(item)}/>}
        key={i}>
        <Card.Meta
          title="images"
          description="I LOVE YOU"/>
      </Card>
    ))

    return (
      <div>
        <Row gutter={10}>
          <Col md={5}>
            {imgList[0]}
          </Col>
          
          <Col md={5}>
            {imgList[1]}
          </Col>

          <Col md={5}>
            {imgList[2]}
          </Col>

          <Col md={5}>
            {imgList[3]}
          </Col>

          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>

        <Modal
          width={300}
          height={500}
          visible={this.state.visible}
          title="图片画廊"
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}>
            {<img src={this.state.currentImg} alt="" style={{width: '100%'}}/>}
        </Modal>
      </div>
    )
  }
}