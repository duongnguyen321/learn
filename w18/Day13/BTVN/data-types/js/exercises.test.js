describe("Bài 1 - Test", function () {
    describe("Kiểm tra một giá trị có phải string hay không", function () {
        it('"Ba Nguyễn"', function () {
            assert.isTrue(isString("Ba Nguyễn"));
        });

        it("123", function () {
            assert.isFalse(isString(123));
        });

        it('"123"', function () {
            assert.isTrue(isString("123"));
        });

        it("null", function () {
            assert.isFalse(isString(null));
        });

        it("undefined", function () {
            assert.isFalse(isString(undefined));
        });

        it("{x: 1}", function () {
            assert.isFalse(isString({ x: 1 }));
        });

        it('new String("Ba Nguyễn")', function () {
            assert.isTrue(isString(new String("Ba Nguyễn")));
        });

        it('"Ahaha"', function () {
            assert.isTrue(isString("Ahaha"));
        });

        it('""', function () {
            assert.isTrue(isString(""));
        });

        it("new String()", function () {
            assert.isTrue(isString(new String()));
        });
    });
});

describe("Bài 2 - Test", function () {
    describe("Chuyển đổi một chuỗi thành dạng title", function () {
        it('""', function () {
            assert.equal(title(""), "");
        });

        it("hello world!", function () {
            assert.equal(title("hello world!"), "Hello world!");
        });

        it("only", function () {
            assert.equal(title("only"), "Only");
        });

        it("HellO WorlD!!!", function () {
            assert.equal(title("HellO WorlD!!!"), "Hello world!!!");
        });

        it("H", function () {
            assert.equal(title("H"), "H");
        });

        it("x", function () {
            assert.equal(title("x"), "X");
        });
    });
});

describe("Bài 3 - Test", function () {
    describe("Chuyển đổi một chuỗi thành dạng parameterize", function () {
        it("Tìm hiểu về Regex trong JavaScript!", function () {
            assert.equal(
                parameterize("Tìm hiểu về Regex trong JavaScript!"),
                "tim-hieu-ve-regex-trong-javascript"
            );
        });

        it("Hello, World!", function () {
            assert.equal(parameterize("Hello, World!"), "hello-world");
        });

        it("#$%*$demo", function () {
            assert.equal(parameterize("#$%*$demo"), "demo");
        });

        it("Chuyển đổi    1 chuỗi_    !", function () {
            assert.equal(
                parameterize("Chuyển đổi    1 chuỗi_    !"),
                "chuyen-doi-1-chuoi"
            );
        });
    });
});

describe("Bài 4 - Test", function () {
    describe("Highlight một từ khóa trong đoạn văn", function () {
        let para =
            "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

        it("bạn", function () {
            let key = "bạn";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("haha", function () {
            let key = "haha";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.equal(result.indexOf(upperKey), -1);
        });

        it("vui vẻ", function () {
            let key = "vui vẻ";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("chào", function () {
            let key = "chào";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("ba", function () {
            let key = "ba";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("béo", function () {
            let key = "béo";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.equal(result.indexOf(upperKey), -1);
        });
    });
});

describe("Bài 5 - Test", function () {
    describe("Tìm câu đầu tiên xuất hiện trong đoạn văn và highlight từ khóa", function () {
        let para =
            "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

        it("bạn", function () {
            let key = "bạn";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 13);
            assert.isAbove(result.indexOf("!"), -1);
        });

        it("haha", function () {
            let key = "haha";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isNull(result);
        });

        it("vui vẻ", function () {
            let key = "vui vẻ";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 28);
            assert.isAbove(result.indexOf("."), -1);
        });

        it("chào", function () {
            let key = "chào";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 13);
            assert.isAbove(result.indexOf("!"), -1);
        });

        it("ba", function () {
            let key = "ba";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 88);
            assert.isAbove(result.indexOf(","), -1);
        });

        it("béo", function () {
            let key = "béo";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isNull(result);
        });
    });
});

describe("Bài 6 - Test", function () {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let nextYear = new Date(now.getFullYear() + 1, 0, 1);

    let timeLeft = nextYear.getTime() - today.getTime();
    let result = timeLeft / 1000 / 60 / 60 / 24;
    it("Tính số ngày còn lại đến tết dương lịch", function () {
        assert.equal(dayLeft(), result);
    });
});

describe("Bài 7 - Test", function () {
    describe("Tính tuổi theo chuỗi ngày tháng năm sinh truyền vào", function () {
        let lastday = new Date();
        lastday.setDate(lastday.getDate() - 1);
        lastday.setFullYear(lastday.getFullYear() - 10);
        lastday =
            lastday.getFullYear() +
            "-" +
            String(lastday.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(lastday.getDate()).padStart(2, "0");

        let today = new Date();
        today.setFullYear(today.getFullYear() - 10);
        today =
            today.getFullYear() +
            "-" +
            String(today.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(today.getDate()).padStart(2, "0");

        let nextday = new Date();
        nextday.setDate(nextday.getDate() + 1);
        nextday.setFullYear(nextday.getFullYear() - 10);
        nextday =
            nextday.getFullYear() +
            "-" +
            String(nextday.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(nextday.getDate()).padStart(2, "0");

        let feature = new Date();
        feature.setFullYear(feature.getFullYear() + 10);
        feature =
            feature.getFullYear() +
            "-" +
            String(feature.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(feature.getDate()).padStart(2, "0");

        it("1234-123-234", function () {
            assert.isNaN(calcAge("2124-23-234"));
        });

        it("1992", function () {
            assert.isNaN(calcAge("1992"));
        });

        it(lastday, function () {
            assert.equal(calcAge(lastday), 10);
        });

        it(today, function () {
            assert.equal(calcAge(today), 10);
        });

        it(nextday, function () {
            assert.equal(calcAge(nextday), 9);
        });

        it(feature, function () {
            assert.isNaN(calcAge(feature));
        });
    });
});

describe("Bài 8 - Test", function () {
    it("Tạo mã màu HEX ngẫu nhiên", function () {
        for (let i = 0; i < 100; i++) {
            assert.match(randHex(), /[0-9a-f]{6}/);
        }
    });
});
