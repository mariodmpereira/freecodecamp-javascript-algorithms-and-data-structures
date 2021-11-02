function spinalCase(str) {
    const finalString = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return finalString.replace(/\s|_/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');