-- CreateTable
CREATE TABLE `DefaulMix` (
    `mix_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `img` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`mix_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DefaultSong` (
    `song_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `img` VARCHAR(200) NOT NULL,
    `author` VARCHAR(200) NOT NULL,
    `mix_id` INTEGER NOT NULL,

    PRIMARY KEY (`song_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DefaultSong` ADD CONSTRAINT `DefaultSong_mix_id_fkey` FOREIGN KEY (`mix_id`) REFERENCES `DefaulMix`(`mix_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
