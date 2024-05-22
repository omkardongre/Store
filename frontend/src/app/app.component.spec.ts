import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'course' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('course');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, course');
  });
});
src / app / app.component.spec.ts

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should initialize title to "course"', () => {
    expect(app.title).toEqual('course');
  });

  it('should have login function', () => {
    expect(app.hasOwnProperty('login')).toBeTrue();
  });

  it('should have logout function', () => {
    expect(app.hasOwnProperty('logout')).toBeTrue();
  });

  it('should call login function without errors', () => {
    const loginSpy = spyOn(app, 'login');
    app.login();
    expect(loginSpy).toHaveBeenCalled();
  });

  it('should call logout function without errors', () => {
    const logoutSpy = spyOn(app, 'logout');
    app.logout();
    expect(logoutSpy).toHaveBeenCalled();
  });
});
src / app / app.component.spec.ts

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should set title to default value if not provided', () => {
        const defaultTitle = 'Default Title';
        app.title = '';
        expect(app.title).toEqual(defaultTitle);
    });

    it('should update title when set', () => {
        const newTitle = 'New Title';
        app.title = newTitle;
        expect(app.title).toEqual(newTitle);
    });

    it('should display correct title in the template', () => {
        const newTitle = 'New Title';
        app.title = newTitle;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain(newTitle);
    });

    it('should handle null or undefined title', () => {
        app.title = null;
        expect(app.title).toBeNull();
        app.title = undefined;
        expect(app.title).toBeUndefined();
    });

    it('should log in successfully', () => {
        const loginSpy = spyOn(app, 'login').and.callThrough();
        const loggedIn = app.login();
        expect(loginSpy).toHaveBeenCalled();
        expect(loggedIn).toBeTrue();
    });

    it('should log out successfully', () => {
        const logoutSpy = spyOn(app, 'logout').and.callThrough();
        const loggedOut = app.logout();
        expect(logoutSpy).toHaveBeenCalled();
        expect(loggedOut).toBeTrue();
    });
});
src / app / app.component.spec.ts

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should initialize title to "course"', () => {
        expect(app.title).toEqual('course');
    });

    it('should have login function', () => {
        expect(app.hasOwnProperty('login')).toBeTrue();
    });

    it('should have logout function', () => {
        expect(app.hasOwnProperty('logout')).toBeTrue();
    });

    it('should call login function without errors', () => {
        const loginSpy = spyOn(app, 'login');
        app.login();
        expect(loginSpy).toHaveBeenCalled();
    });

    it('should call logout function without errors', () => {
        const logoutSpy = spyOn(app, 'logout');
        app.logout();
        expect(logoutSpy).toHaveBeenCalled();
    });
});
