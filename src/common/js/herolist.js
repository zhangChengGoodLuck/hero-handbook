class TopHerolist {
  constructor ({imgid, name, title}) {
    this.imgid = imgid
    this.name = name
    this.title = title
  }
}

let res = []

export function CreateTopHeroList (heroList) {
  res.push(new TopHerolist({
    imgid: heroList.ename,
    name: heroList.cname,
    title: heroList.title
  }))
  return res
}
