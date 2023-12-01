BEGIN;

-- Insertion de données pour les rôles
INSERT INTO "role" ("name") VALUES ('membre'), ('admin'), ('bloqué');

-- Insertion de données pour les adresses
INSERT INTO "address" ("full_address", "number", "street", "zipcode", "city", "country", "latitude", "longitude") VALUES 
('123 Rue de la Paix, 75000 Paris', '123', 'Rue de la Paix', '75000', 'Paris', 'France', '48.8566', '2.3522'),
('456 Avenue de la Liberté, 33000 Bordeaux', '456', 'Avenue de la Liberté', '33000', 'Bordeaux', 'France', '44.8378', '-0.5795'),
('789 Boulevard du Midi, 13000 Marseille', '789', 'Boulevard du Midi', '13000', 'Marseille', 'France', '43.2965', '5.3698');

-- Insertion de données pour les utilisateurs
INSERT INTO "user" ("address_id", "role_id", "firstname", "lastname", "pseudonym", "email", "password") VALUES 
(1, 2, 'Alice', 'Dupont', 'alice123', 'alice@example.com', 'password123'),
(2, 1, 'Bob', 'Martin', 'bob456', 'bob@example.com', 'password456'),
(3, 1, 'Charlie', 'Durand', 'charlie789', 'charlie@example.com', 'password789'),
(1, 3, 'Denise', 'Petit', 'denise101', 'denise@example.com', 'password101');

-- Insertion de données pour les catégories
INSERT INTO "category" ("name") VALUES ('BD'), ('Livre'), ('Magazine');

-- Insertion de données pour les audiences
INSERT INTO "audience" ("name") VALUES ('tout public'), ('jeunesse');

-- Insertion de données pour les conditions
INSERT INTO "condition" ("name") VALUES ('comme neuf'), ('légèrement abimé'), ('abimé');

-- Insertion de données pour les posts
INSERT INTO "post" ("user_id", "category_id", "audience_id", "condition_id", "post_title", "description", "book_title", "book_author", "slug") VALUES
(2, 2, 1, 1, 'Vente de livre sur l''écologie', 'Découvrez les secrets de l''écologie avec ce livre passionnant', 'La Terre en Héritage', 'Jean Écolo', 'vente-livre-ecologie'),
(3, 2, 1, 2, 'Livre éducatif sur l''environnement', 'Apprenez tout sur l''environnement avec ce guide complet', 'Sauver notre Planète', 'Marie Nature', 'livre-educatif-environnement');

COMMIT;