function appendTo(element, appendTO) {
    getElemQ(appendTO).append(element);
  }
  function getELM(id) {
    return document.getElementById(id);
  }
  function getElemQ(selctor) {
    return document.querySelector(selctor);
  }
  function crateELM(
    elementName,
    elementClass = "",
    elementId = "",
    innerText="",
    src = "",
    href = "",

  ) {
    let e = document.createElement(elementName);
    e.className = elementClass;
    e.id = elementId;
    e.innerText=innerText;
    e.src = src;
    e.href =href;
    return e;
  }
//   crateELM()
  let arrItems = [
    {   name:"banana",
        price:50,
        imgSrc:"images/banana.jpg",
        link:"https://en.wikipedia.org/wiki/Banana"
    },
    {   name:"kiwi",
        price:40,
        imgSrc:"images/kiwi.jpg",
        link:"https://en.wikipedia.org/wiki/Kiwifruit"
    },
    {   name:"mango",
        price:100,
        imgSrc:"images/mango.jpg",
        link:"https://en.wikipedia.org/wiki/Mango"
    },
    {   name:"orange",
        price:20,
        imgSrc:"images/orange.jpg",
        link:"https://en.wikipedia.org/wiki/Orange_(fruit)"
    },
  ];
  for(i of arrItems){
    appendTo(crateELM("a"),"main")
  }