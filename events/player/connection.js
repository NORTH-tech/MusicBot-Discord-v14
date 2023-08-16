module.exports = async (client, queue) => {
    console.log("aaa")
    try {
        await queue.node.setVolume(10);
        console.log("aaa")
    } catch {}
}