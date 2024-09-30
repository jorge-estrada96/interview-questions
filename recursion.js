const elements = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "item 1",
      children: [
        {
          tag: "ul",
          children: [
            {
              tag: "li",
              text: "item 2",
              children: [
                {
                  tag: "ol",
                  children: [
                    {
                      tag: "li",
                      text: "item 3"
                    }
                  ]
                }
              ]
            },
            {
              tag: "li",
              text: "item 4"
            }
          ]
        }
      ]
    },
    {
      tag: "li",
      text: "item 5"
    }
  ]
};


const jsonTreeToHTML = (data, indentation = 0) => {
  let template = '';

  const buildTemplate = (tree, cursor = 0) => {
    template += `${" ".repeat(cursor)}<${tree.tag}>\n`
    cursor += indentation
    
    if (tree.text) template += `${" ".repeat(cursor)}${tree.text}\n` 
    if (tree.children) tree.children.map(child => buildTemplate(child, cursor))

    cursor -= indentation
    template += `${" ".repeat(cursor)}</${tree.tag}>\n`
  }

  buildTemplate(data)

  return template
}


const result = jsonTreeToHTML(elements, 2)