
 - **Principiul responsabilității unice (Single Responsibility Principle)** este respectat în clasele **TodoItem, TodoList și App,** fiecare clasă având o singură responsabilitate.
 - **Principiul deschis-închis (Open-Closed Principle)** este respectat în metoda filter din clasa **TodoList,** care este deschisă pentru extensie (prin adăugarea de noi filtre),dar închisă pentru modificare.
 - **Principiul substituției Liskov (Liskov Substitution Principle)** este respectat deoarece clasa **TodoItem** poate fi înlocuită cu orice altă clasă care are aceeași interfață,fără a afecta comportamentul aplicației.
 - **Principiul segregării interfețelor (Interface Segregation Principle)**  clasa **TodoItem** are o interfață care se concentrează pe sarcina de a gestiona un element de sarcină specific, cum ar fi comutarea între starea finalizată și neîncheiată a sarcinii.De asemenea, clasa TodoList utilizează o interfață specializată pentru a gestiona olistă de elemente de sarcină, inclusiv adăugarea, eliminarea,modificarea și filtrarea sarcinilor.
 - **Principiul inversiunii dependențelor (Dependency Inversion Principle)** este respectat prin injectarea obiectului **TodoList** în clasa **App** și utilizarea
acestuia prin intermediul unei interfețe, **ITodoList,** care face posibilă schimbarea implementării clasei **TodoList** fără a afecta restul aplicației.
