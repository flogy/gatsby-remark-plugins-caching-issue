module.exports = ({ actions, createNodeId, createContentDigest }) => {
    console.log("Creating a new node");
    const { createNode } = actions;
    createNode({
        test: "testvalue",

        id: createNodeId("test"),
        parent: null,
        children: [],
        internal: {
            contentDigest: createContentDigest("testvalue"),
            type: "Test",
        }
    });
}
