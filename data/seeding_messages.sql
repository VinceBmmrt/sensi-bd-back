BEGIN;

-- Insertion de données dans les messages
INSERT INTO "message" ("sender_id", "receiver_id", "post_id", "content") VALUES
(9, 10, 1, 'Bonjour, je suis intéressé par votre annonce'),
(10, 9, 1, 'Merci pour votre message, je suis disponible pour l''échanger'),
(9, 10, 1, 'Êtes vous dispo ce samedi matin ?'),
(11, 10, 1, 'Bonjour, je suis intéressé par votre annonce moi aussi !'),
(10, 11, 1, 'Ah désolé on viens de me contacter pour cette annonce précise');

COMMIT;
