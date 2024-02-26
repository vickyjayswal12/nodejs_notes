// scan vs query

// scanTable function scans the entire DynamoDB table.
// queryTable function queries the table based on the provided partition key name and value.
// Remember, when scanning a table, be cautious as it can consume a lot of resources, especially for large tables. Queries are more efficient for retrieving specific data based on key attributes.


// it means if search data using partiona key than only it is query

// Yes, that's correct. In DynamoDB, when you're searching for data based on the partition key, it's referred to as a query rather than a scan.

// A query operation in DynamoDB is designed to efficiently retrieve items based on the partition key and optionally a sort key. This operation is highly efficient because DynamoDB knows exactly where to look for the data based on the provided key values.

// On the other hand, a scan operation reads every item in a table or secondary index, which can be inefficient and resource-intensive, especially for large datasets.

// Therefore, if you're searching for data based on the partition key (and optionally the sort key), it's always preferable to use a query operation rather than a scan operation in DynamoDB. This ensures better performance and efficient resource utilization.





// Q-if search using another fields

// If you need to search for data based on fields other than the partition key, you have a few options:

// Query with a Secondary Index: If the field you want to search on is not the partition key, but you still want efficient querying, you can create a secondary index on that field. Secondary indexes allow you to query based on non-key attributes. You can create either a global secondary index (GSI) or a local secondary index (LSI) depending on your requirements.

// Scan Operation: If you don't have an appropriate secondary index and need to search based on non-key attributes, you can use a scan operation. However, keep in mind that scans are less efficient compared to queries, as they examine every item in the table or index. Scans can be resource-intensive and slow for large datasets.