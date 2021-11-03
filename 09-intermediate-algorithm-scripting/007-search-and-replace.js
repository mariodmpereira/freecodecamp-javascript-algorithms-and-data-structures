function myReplace(str, before, after) {
    const regex = new RegExp(`${before}`);
    const isBeforeOnStr = str.match(regex) !== null;
    const doesBeforeStartWithLowercase = before[0] === before[0].toLowerCase();
    const afterFirstElement = after[0];
    let afterClone = after;

    doesBeforeStartWithLowercase ?
        afterClone = afterClone.replace(afterFirstElement, afterFirstElement.toLowerCase()) :
        afterClone = afterClone.replace(afterFirstElement, afterFirstElement.toUpperCase());

    if (isBeforeOnStr) {
        return str.replace(before, afterClone);
    }

    return str;
}

myReplace("I think we should look up there", "up", "Down") // I think we should look down there.
