module.exports = ({ actions, createNodeId, createContentDigest, markdownNode }) => {
    console.log(`Creating a new test node and link it to parent node: ${markdownNode.id}`);
    const { createNode } = actions;
    createNode({
        test: "testvalue",

        id: createNodeId("test"),
        parent: markdownNode.id,
        children: [],
        internal: {
            contentDigest: createContentDigest("testvalue"),
            type: "Test",
        }
    });
}
