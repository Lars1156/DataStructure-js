function binarySearch(sortedList, target) {
    let low = 0;
    let high = sortedList.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const neighbor = sortedList[mid];
  
      if (neighbor === target) {
        return mid;
      } else if (neighbor < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; // Target not found
  }
  
  function adjacencyListSearch(adjList, node, targetNeighbor) {
    const neighbors = adjList[node];
  
    if (!neighbors || !neighbors.length) {
      return null; // No neighbors for this node
    }
  
    const neighborIndex = binarySearch(neighbors, targetNeighbor);
  
    if (neighborIndex !== -1) {
      return `Target neighbor ${targetNeighbor} found at index ${neighborIndex} for node ${node}`;
    }
  
    return null; // Target neighbor not found in this node's list
  }
  
  // Example usage
  const adjList = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
  };
  
  const result = adjacencyListSearch(adjList, "A", "C");
  console.log(result); // Output: Target neighbor C found at index 1 for node A
  