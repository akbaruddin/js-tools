// link: https://regexr.com/4i8fu
const htmlTag = '<iframe width="560" height="315" disabled=0 src="https://www.youtube.com/embed/6KHvOFTy6BI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'
const allAttributes = htmlTag.match(/[a-zA-Z]+=("([^"]*)"|([a-zA-Z0-9]*))/g);
const attrDict = {};

allAttributes.forEach((attr) => {
  const [key, value] = attr.split('=');
  attrDict[key] = value.replace(/'|"/g, '')
})

console.log(attrDict)