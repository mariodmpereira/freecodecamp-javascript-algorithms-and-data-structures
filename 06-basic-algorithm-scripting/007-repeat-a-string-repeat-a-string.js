function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    }

    if (num === 0) {
        return 1;
    }

    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);