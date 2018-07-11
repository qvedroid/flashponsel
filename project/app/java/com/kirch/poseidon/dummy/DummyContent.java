package com.kirch.poseidon.dummy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Helper class for providing sample content for user interfaces created by
 * Android template wizards.
 * <p/>
 * TODO: Replace all uses of this class before publishing your app.
 */
public class DummyContent {

    /**
     * An array of sample (dummy) items.
     */
    public static List<DummyItem> ITEMS = new ArrayList<DummyItem>();

    /**
     * A map of sample (dummy) items, by ID.
     */
    public static Map<String, DummyItem> ITEM_MAP = new HashMap<String, DummyItem>();

    static {
        // Add 3 sample items.
        addItem(new DummyItem("Point Of Sale", "pos"));
        addItem(new DummyItem("Return", "return"));
        addItem(new DummyItem("Create Account", "createAccount"));
        addItem(new DummyItem("Transaction Lookup", "transactionLookup"));
        addItem(new DummyItem("Order Inventory", "orderInvetory"));
        addItem(new DummyItem("Add Inventory", "addInventory"));
        addItem(new DummyItem("Remove Inventory", "removeInvetory"));
        addItem(new DummyItem("Manage Accounts", "manageAccounts"));
    }

    private static void addItem(DummyItem item) {
        ITEMS.add(item);
        ITEM_MAP.put(item.id, item);
    }

    /**
     * A dummy item representing a piece of content.
     */
    public static class DummyItem {
        public String id;
        public String content;

        public DummyItem( String content, String id) {
            this.id = id;
            this.content = content;
        }

        @Override
        public String toString() {
            return content;
        }
    }
}
