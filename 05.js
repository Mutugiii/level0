function areaOfTriangle(len1, len2, len3) {
    // Calculate semiperimter
    var s = 1/2 * (len1 + len2 + len3);

    // Heron's Formula
    var area = Math.sqrt(s *((s - len1) * (s-len2) * (s-len3)));

    return area;
}



console.log(areaOfTriangle(3,4,5));
console.log(areaOfTriangle(6,6,6));
