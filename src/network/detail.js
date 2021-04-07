import {request} from './request'

export function getdata(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.oldPrice = itemInfo.oldPrice;
      this.lowNowPrice = itemInfo.lowNowPrice;
      this.price = itemInfo.price;
      this.discountBgColor = itemInfo.discountBgColor;
      this.discountDesc = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam{
    constructor(info,rule){
        this.image=info.images?info.images[0]:'';
        this.infos = info.set;
        this.sizes = rule.tables[0];
    }
}