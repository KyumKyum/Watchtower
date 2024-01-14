-- CreateTable
CREATE TABLE "Sign" (
    "id" TEXT NOT NULL,
    "guestName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sign_pkey" PRIMARY KEY ("id")
);
