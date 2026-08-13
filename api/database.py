import sqlite3
from pathlib import Path

# Database file path (relative to workspace root)
DB_PATH = Path(__file__).parent.parent / "northstar.db"


def get_db_connection():
    """
    Establishes a connection to the SQLite database.
    Sets row_factory to sqlite3.Row for dictionary-like column access.
    
    Returns:
        sqlite3.Connection: Database connection object
    """
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn


def setup_database():
    """
    Sets up the database by creating the orders table and inserting mock data.
    Drops the table first if it exists to ensure a fresh database.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # Drop table if it exists
        cursor.execute("DROP TABLE IF EXISTS orders")
        
        # Create orders table
        cursor.execute("""
            CREATE TABLE orders (
                order_id TEXT PRIMARY KEY,
                customer_email TEXT NOT NULL,
                status TEXT NOT NULL,
                expected_delivery TEXT,
                return_eligible BOOLEAN,
                return_status TEXT
            )
        """)
        
        # Insert mock data
        mock_orders = [
            (
                "ORD-2024-001",
                "john.doe@example.com",
                "delivered",
                "2024-01-15",
                True,
                "none"
            ),
            (
                "ORD-2024-002",
                "jane.smith@example.com",
                "in_transit",
                "2024-01-18",
                True,
                "none"
            ),
            (
                "ORD-2024-003",
                "bob.johnson@example.com",
                "delivered",
                "2024-01-10",
                False,
                "none"
            ),
            (
                "ORD-2024-004",
                "alice.williams@example.com",
                "delivered",
                "2024-01-12",
                True,
                "requested"
            ),
            (
                "ORD-2024-005",
                "charlie.brown@example.com",
                "processing",
                "2024-01-20",
                True,
                "none"
            ),
        ]
        
        cursor.executemany(
            """
            INSERT INTO orders 
            (order_id, customer_email, status, expected_delivery, return_eligible, return_status)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            mock_orders
        )
        
        conn.commit()
        print("✓ Database setup completed successfully!")
        print(f"✓ Database file created at: {DB_PATH}")
        print(f"✓ Inserted {len(mock_orders)} mock orders")
        
    except sqlite3.Error as e:
        print(f"✗ Database error: {e}")
        conn.rollback()
        raise
    finally:
        conn.close()


if __name__ == "__main__":
    setup_database()
