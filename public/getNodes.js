function getNodes(htmlString, doc, fragment) {

  var map = {
    "<td":[3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<th":[3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<tr":[2, "<table><thead>", "</thead></table>"],
    "<option":[1, "<select multiple='multiple'>", "</select>"],
    "<optgroup":[1, "<select multiple='multiple'>", "</select>"],
    "<legend":[1, "<fieldset>", "</fieldset>"],
    "<thead":[1, "<table>", "</table>"],
    "<tbody":[1, "<table>", "</table>"],
    "<colgroup":[1, "<table>", "</table>"],
    "<caption":[1, "<table>", "</table>"],
    "<col":[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    "<link":[3, "<div></div><div>", "</div>"]
  };

  var tagName = htmlString.match(/<\w*/),
    mapEntry = tagName ? map[tagName[0]] : null;
  if (!mapEntry) mapEntry = [0, "", ""];

  var div = (doc || document).createElement("div");

  div.innerHTML = mapEntry[1] + htmlString + mapEntry[2];

  while (mapEntry[0]--) div = div.lastChild;

  return div.childNodes;
}
