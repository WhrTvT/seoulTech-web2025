try {
    throw new Error('오류 발생');
} catch(e) {
    document.write(e.message);
}
