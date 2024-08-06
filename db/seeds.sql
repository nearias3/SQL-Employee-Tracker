INSERT INTO department (name) VALUES ('Heroes'), ('Executives'), ('Resource Humans');

INSERT INTO role (title, salary, department_id) VALUES 
('Superhero', 90000, 1), 
('Executive', 60000, 2), 
('Human', 5000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('A', 'Train', 1, NULL), 
('Ashley', 'Barrett', 2, 1), 
('Hughie', 'Campbell', 3, NULL);
