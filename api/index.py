from fastapi import FastAPI, HTTPException
from api.database import get_db_connection

app = FastAPI()


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.get("/api/orders/{order_id}")
async def get_order(order_id: str, email: str):
    """
    Get order tracking information.
    
    Args:
        order_id: The order ID to track
        email: The customer email for verification
        
    Returns:
        Dictionary containing order status and expected delivery date
        
    Raises:
        HTTPException: 404 if order not found, 401 if email doesn't match
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # Query for the order
        cursor.execute(
            "SELECT customer_email, status, expected_delivery FROM orders WHERE order_id = ?",
            (order_id,)
        )
        order = cursor.fetchone()
        
        # Check if order exists
        if order is None:
            raise HTTPException(status_code=404, detail="Order not found")
        
        # Check if email matches
        if order["customer_email"] != email:
            raise HTTPException(status_code=401, detail="Unauthorized")
        
        # Return order tracking info
        return {
            "order_id": order_id,
            "status": order["status"],
            "expected_delivery": order["expected_delivery"]
        }
    finally:
        conn.close()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
