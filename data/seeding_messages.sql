BEGIN;

-- Insertion de données dans les messages
INSERT INTO "message" ("sender_id", "receiver_id", "post_id", "content") VALUES
(1, 2, 1, 'Bonjour, je suis intéressé par votre annonce'),
(2, 1, 1, 'Merci pour votre message, je suis disponible pour l''échanger'),
(3, 2, 1, 'Bonjour, je suis intéressé par votre annonce moi aussi !');

COMMIT;
