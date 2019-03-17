// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "insertdate" is now active!');
	let disposable = vscode.commands.registerCommand('extension.insertdate', function () {
	if (!vscode.window.activeTextEditor) {
	return;
	}
	let editor = vscode.window.activeTextEditor;
	//日付を取得し、文字列に変換し dateString に格納
	let dt = new Date();
	let dateString = dt.toLocaleString() + " ";
	editor.edit(function (text) {
	//現在のカーソル位置を取得
	let selection = editor.selection;
	let startLine = selection.start.line;
	let startCharacter = selection.start.character;
	//取得したカーソル位置を引数に vscode.Potion(); を実行して .intert に渡して done!
	text.insert(new vscode.Position(startLine, startCharacter), dateString);
	});
	});
	context.subscriptions.push(disposable);
	}

// this method is called when your extension is deactivated
export function deactivate() {}
