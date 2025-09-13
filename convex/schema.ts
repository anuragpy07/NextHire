import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal("candidate"), v.literal("interviewer")),
        clerkId: v.string(),
    }).index("by_clerk_id", ["clerkId"]),
<<<<<<< HEAD
});

=======
<<<<<<< HEAD
});
=======
});

>>>>>>> 10101c7 (refactor: restructure Convex folder for improved integration)
>>>>>>> 9336830 (feat: integrate Convex backend and base app structure with Next.js)
