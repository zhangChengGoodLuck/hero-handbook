class TopHerolist {
  constructor ({imgid, name, title}) {
    this.imgid = imgid
    this.name = name
    this.title = title
  }
}

export function CreateTopHeroList (heroList) {
  let res = []
  console.log(heroList)
  heroList.forEach((item) => {
    if (item.pay_type === 10) {
      res.push(new TopHerolist({
        imgid: item.ename,
        name: item.cname,
        title: item.title
      }))
    }
  })
  return res
}

export function initHeroTypeList (heroList, typeid) {
  let tankList = []
  heroList.forEach((item, index) => {
    if (heroList[index].hero_type === typeid) {
      tankList.push(heroList[index])
    }
  })
  console.log(tankList)
  return tankList
}
