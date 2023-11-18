import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import LoginForm from "./LoginForm";

Enzyme.configure({ adapter: new Adapter() });

const noop = () => {};

describe("<LoginForm>", () => {
  it("render login form", () => {
    const wrapper = shallow(<LoginForm onSubmit={noop} />);
    const form = wrapper.find("form");
    expect(form).toHaveLength(1);

    const inputs = form.find("input");
    expect(inputs).toHaveLength(2);
    const btn = form.find("button");
    expect(btn).toHaveLength(1);
    // check the props of input

    const email = inputs.at(0);
    expect(email.prop("name")).toBe("email");
    expect(email.prop("required")).toBe(true);
    expect(email.prop("aria-invalid")).toBe("false");
    expect(email.prop("aria-describedby")).toBe(undefined);

    const password = inputs.at(1);
    expect(password.prop("name")).toBe("password");
    expect(password.prop("required")).toBe(true);
    expect(password.prop("aria-invalid")).toBe("false");
    expect(password.prop("aria-describedby")).toBe(undefined);
  });

  it("invalid input", () => {
    const errors = {
      email: "Email is required",
      password: "Password is required",
    };
    const IDS = {
      emailError: "login-email-error",
      passwordError: "login-password-error",
    };
    const wrapper = shallow(<LoginForm onSubmit={noop} errors={errors} />);
    const inputs = wrapper.find("input");

    const email = inputs.at(0);
    expect(email.prop("aria-invalid")).toBe("true");
    expect(email.prop("aria-describedby")).toBe(IDS.emailError);

    const emailErrorPara = wrapper.find(`p#${IDS.emailError}`);
    expect(emailErrorPara).toHaveLength(1);
    expect(emailErrorPara.text()).toBe(errors.email);

    // password
    const pwd = inputs.at(1);
    expect(pwd.prop("aria-invalid")).toBe("true");
    expect(pwd.prop("aria-describedby")).toBe(IDS.passwordError);

    const pwdErrorPara = wrapper.find(`p#${IDS.passwordError}`);
    expect(pwdErrorPara).toHaveLength(1);
    expect(pwdErrorPara.text()).toBe(errors.password);
  });

  it("test onSubmit", () => {
    const values = {
      email: "soorria@email.com",
      password: "super secure password",
    };
    const mockFn = jest.fn();
    const wrapper = shallow(<LoginForm onSubmit={mockFn} />);

    const inputs = wrapper.find("input");
    const email = inputs.at(0);
    email.simulate("change", { target: { value: values.email } });

    const password = inputs.at(1);
    password.simulate("change", { target: { value: values.password } });
    wrapper.update();

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: noop });
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(values);
  });
});
