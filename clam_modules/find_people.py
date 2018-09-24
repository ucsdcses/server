import computer_count as AccessNet
import sys
if __name__ == "__main__":
  subInt = AccessNet.SshInterface()
  subInt.login(sys.argv[1])
  subInt.getWho()
  subInt.logout()
