// Chapter17FlipFlopCoreD (c) Charles Petzold, 2024

let Chapter17FlipFlopCoreD = 
{
    name: "Chapter17FlipFlopCoreD",
    components:
        [
            { name: "coreRS", type: "External", file: "Chapter17FlipFlopCoreRS" },

            { name: "and1", type: "AndGate", x: -250, relative: { xy: { name: "coreRS.nor1", io: "A" }}},
            { name: "and2", type: "AndGate", relative: { x: { name:"and1" }, y: { name: "coreRS.nor2", io: "B" }}},

            { name: "node", type: "Node", x:-75, y: 125, relative: { xy: { name: "and1" }} },
            { name: "jt1", type: "Joint", relative: { x: { name:"node"}, y: { name:"and1", io: "B"}}},
            { name: "jt2", type: "Joint", relative: { x: { name:"node"}, y: { name:"and2", io: "A"}}}
        ],       

    wires:
        [
            { name: "wireAnd1", points: [ { name:"node"}, { name:"jt1"}, { name: "and1", io: "B", input: 1 }]},
            { name: "wireAnd2", points: [ { name:"node"}, { name:"jt2"}, { name: "and2", io: "A", input: 0 }]},
            { name: "wireFromAnd1", points: [ { name:"and1", io: "out"}, { name:"coreRS.nor1", io: "A", input: 0 }]},
            { name: "wireFromAnd2", points: [ { name:"and2", io: "out"}, { name:"coreRS.nor2", io: "B", input: 1 }]}
        ]
}