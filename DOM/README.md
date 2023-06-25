# Document Object Model DOM

The DOM specifies how the browser should create a model of an HTML page and how JS can access
and update the contents of a webpage while it is in the browser window.

1. Making the model of the HTML page.

   When a browser loads a page it create a model of the page in memory. The DOM specifies how this
   model should be structure using a _DOM tree_. The DOM three is composed of objects which represent
   a different part of the window.

2. Accessing and Changing the HTML page
   The DOM also defines methods and properties to access and update each object in this model,
   which in turn updates what the user sees in the browser.

## The DOM Tree is a model of a web page

The DOM Tree is stored in the browser's memory. It consists of four main types of nodes:

- Document Node
- Element Node
- Attribute Node
- Text Node

Each node is an object with methods and properties. Scripts access and update the DOM tree
(not the html file). Any changes made to the DOM tree are reflected in the browser.

The _document node_ represents the entire web page and corresponds to the DOM. It is the starting
point of the DOM tree. Every element, attribute or text is its own DOM node. When you access these nodes
you navigate to them starting from the document node.

HTML elements describe the structure of the HTML page. Every element is its own _element node_. To access the DOM tree
you start by looking for elements.

_Attribute nodes_ every element may have attributes. The attributes of an element are _not_ children of the element
they are a part of that element. There are specific javascript methods and properties to read or change that
element's attributes. Changing the class of an element for example.

_Text nodes_ are the leafs of the three. They cannot have children of their own. If they contain tags like <em> or
<b> they are children of the containing element.

## Working with the DOM tree

Accessing and updating the DOM tree involves two steps:

1. Locate the node that represents the element you want to work with.
2. Use its text content, child elements, and attributes

Step 1: Accessing the elements

1. Accessing an individual element

- `getElementById()` Using the ID attribute
- `querySelector()` Using the CSS selector

2. Selecting multiple elements

- `getElementsByClassName`
- `getElementsByTagName`
- `querySelectorAll`

3. Traversing between element nodes

- `parentNode` - the parent of the current element
- `previousSibling/ nextSibling` - Selects the previous or next sibling from the DOM tree.
- `firstChild / lastChild` - Selects the first or last child of the current element.

Step. 2 Work with those elements

_Access / Update text nodes_

`nodeValue` - property that let's you access or update contents of a text node.

_Work with HTML content_

`innerHTML` - allows access to child elements and text content
`textContent` - allows access to the text content

You can create new nodes, add them or remove them from the DOM tree

`createElement()`
`createTextNode()`
`appendChild() / removeChild()`

_Access or Update attribute values_

`hasAttibute()`
`getAttribute()`
`setAttribute()`
`removeAttribute()`

## Caching DOM queries

Methods that find elements are called DOM queries. When you find an element you can
store it in a variable. This is called caching the selection.
When you store it in a variable, you are really storing its location within the DOM tree.
It stores a reference to the object in the DOM tree.

## Accessing Elements

DOM queries can return one element or many elements called a NodeList, which is a
collection of nodes. The NodeList has an index like an array.

_fater route_

Finding the quickest way to access an element withing your web page will make the page
seem faster and / or more responsive. This means evaluating the minimum number of nodes
on the way to the element to work with.

`getElementById()` is the quickest and most efficient way to access an element.
