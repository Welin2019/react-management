import React from 'react'
import './ui.less'
import { Card, Carousel } from 'antd'

export default class Carousels extends React.Component {

  render () {

    return (
      <div>
        <Card title="文字背景轮播">
          <Carousel autoplay effect="fade">
            <div><h3>欢迎访问</h3></div>
            <div><h3>XXX股份有限公司</h3></div>
            <div><h3>like</h3></div>
          </Carousel>
        </Card>

        <Card title="图片轮播" style={{marginTop: 20}} className="slider-wrap">
          <Carousel autoplay effect="fade" style={{height: 500}}>
            <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588675949857&di=34b5e6232543e12547a52f3c9546a0e8&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F111221%2F10011-1112211FS033.jpg" alt="" style={{width: '100%'}}/>
            </div>

            <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588675949856&di=4fd293f2590cbc62909bc00196eb5c9b&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb03533fa828ba61e974097494934970a304e592d.jpg" alt="" style={{width: '100%'}}/>
            </div>

            <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588675949852&di=84ac71399f76e0f499317f91104a7357&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190508%2F19%2F1557313363-hKmMzHUxPj.jpg" alt="" style={{width: '100%'}}/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}