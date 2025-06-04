async function work() {
    return 'done';
}

async function run() {
    const result = await work();
    document.write(result);
}
run();
