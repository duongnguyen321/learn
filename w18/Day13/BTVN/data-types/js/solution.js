// Bài 1

// Viết chương trình kiểm tra một giá trị có phải một string hay không
// value là giá trị nhận vào
function isString(value) {
    return typeof value === "string" || value instanceof String;
}

// Bài 2

// Viết chương trình chuyển đổi một chuỗi thành dạng title
// VD: hello World! -> Hello world!
// str là chuỗi nhận vào
function title(str) {
    str = str.trim();

    if (str.length === 0) return "";

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Bài 3

// Viết chương trình chuyển đổi một chuỗi thành dạng parameterize (url)
// Ví dụ: Chương trình Hello World -> chuong-trinh-hello-world
// str là chuỗi nhận vào
function parameterize(str) {
    // Loại bỏ các ký tự đặc biệt
    str = str.toLowerCase();

    // Loại bỏ ký tự có dấu
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");

    // Xóa các ký tự đặc biệt
    str = str.replace(/[^a-zA-Z0-9 ]/g, " ");
    // Loại bỏ nhiều dấu cách ở giữa (nếu có)
    str = str.replace(/\s{2,}/g, " ");

    str = str.trim();
    str = str.replaceAll(" ", "-");

    return str;
}

// Ví dụ cho đoạn văn sau
let para =
    "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

// Bài 4

// Viết chương trình tìm highlight (in hoa) tất các từ khóa xuất hiện trong đoạn văn
// VD: 'bạn' -> "Xin chào các BẠN! ..."
// key là từ khóa
// key không chứa ký tự đặc biệt
// Từ khóa phải là một từ riêng biệt (phía sau có dấu cách hoặc dấu câu)
// KHÔNG phân biệt chữ hoa chữ thường
function highlight(para, key) {
    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ ký tự đặc biệt
    modifiedPara = modifiedPara.replaceAll(".", " ");
    modifiedPara = modifiedPara.replaceAll(",", " ");
    modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";

    let index = modifiedPara.indexOf(modifiedKey);

    while (index != -1) {
        para =
            para.slice(0, index) +
            key.toUpperCase() +
            para.slice(index + key.length);

        index = modifiedPara.indexOf(modifiedKey, index + modifiedKey.length);
    }

    return para;
}

// Bài 5

// Viết chương trình lấy ra câu đầu tiên xuất hiện từ khóa, đồng thời highlight (in hoa) từ khóa
function firstSentence(para, key) {
    // Chuyển đổi tất cả dấu kết thúc câu khác như !; thành .
    let onlyDot = para.replaceAll("!", ".");

    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ dấu kết thúc câu
    modifiedPara = modifiedPara.replaceAll(".", " ");
    modifiedPara = modifiedPara.replaceAll(",", " ");
    modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";

    let index = modifiedPara.indexOf(modifiedKey);

    if (index === -1) return null;

    let start = onlyDot.lastIndexOf(".", index);
    let end = onlyDot.indexOf(".", index);

    let sentence = para.slice(start + 1, end + 1).trim();
    return highlight(sentence, key);
}

// Bài 6

// Viết chương trình tính số ngày còn lại đến tết dương lịch năm sau
function dayLeft() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let nextYear = new Date(now.getFullYear() + 1, 0, 1);

    let timeLeft = nextYear.getTime() - today.getTime();
    return timeLeft / 1000 / 60 / 60 / 24;
}

// Bài 7

// Viết chương trình tính số tuổi theo ngày tháng năm sinh
// Tính chính xác theo ngày
// birthday là chuỗi ngày tháng năm sinh theo format "YYYY-MM-DD"
// Kiểm tra ngày tháng truyền vào có hợp lệ hay không
// Ví dụ birthday truyền vào và ngày thực tế tạo ra không khớp, hoặc birthday từ tương lai
// Nếu không hợp lệ thì trả về NaN
function calcAge(birthday) {
    // Nếu birthday không khớp format "YYYY-MM-DD"
    if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(birthday)) return NaN;

    let date = new Date(birthday);
    let now = new Date();

    if (date.getTime() > now.getTime()) return NaN;

    let dateString =
        date.getFullYear() +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(date.getDate()).padStart(2, "0");

    if (dateString != birthday) return NaN;

    if (
        now.getMonth() > date.getMonth() ||
        (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate())
    ) {
        return now.getFullYear() - date.getFullYear();
    } else {
        return now.getFullYear() - date.getFullYear() - 1;
    }
}

// Bài 8

// Viết chương trình tạo mã màu HEX ngẫu nhiên
function randHex() {
    let hex = "";
    for (let i = 0; i < 3; i++) {
        hex += Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
    }
    return hex;
}
